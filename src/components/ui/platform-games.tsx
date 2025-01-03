import React, { useEffect, useRef, useState } from "react";

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  velocityY: number;
  isJumping: boolean;
}

interface Platform {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Coin {
  x: number;
  y: number;
  width: number;
  height: number;
  collected: boolean;
}

const PlatformGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const animationFrameRef = useRef<number>();

  // Game state stored in refs to avoid re-renders
  const playerRef = useRef<GameObject>({
    x: 50,
    y: 200,
    width: 30,
    height: 30,
    velocityY: 0,
    isJumping: false,
  });

  const initialCoins = [
    { x: 180, y: 250, width: 20, height: 20, collected: false },
    { x: 440, y: 200, width: 20, height: 20, collected: false },
    { x: 650, y: 350, width: 20, height: 20, collected: false },
  ];

  const platformsRef = useRef<Platform[]>([
    { x: 0, y: 400, width: 200, height: 20 }, // Starting platform
    { x: 300, y: 400, width: 200, height: 20 }, // Platform after first pit
    { x: 600, y: 400, width: 200, height: 20 }, // End platform
    { x: 150, y: 300, width: 100, height: 20 }, // Middle floating platform 1
    { x: 400, y: 250, width: 100, height: 20 }, // Middle floating platform 2
  ]);

  const coinsRef = useRef<Coin[]>(initialCoins);
  const finishLineRef = useRef({ x: 750, y: 200, width: 20, height: 200 });
  const keysRef = useRef<{ [key: string]: boolean }>({});

  const gravity = 0.5;
  const jumpForce = -12;
  const moveSpeed = 5;

  const checkCollision = (
    rect1: GameObject | Platform,
    rect2: Platform | Coin
  ): boolean => {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  };

  const stopGame = () => {
    setGameStarted(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const gameLoop = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Don't update game state if game is over or won
    if (gameOver || gameWon) {
      stopGame();
      return;
    }

    // Clear canvas
    ctx.clearRect(0, 0, 800, 450);

    // Update player position based on input
    const player = playerRef.current;
    if (keysRef.current["ArrowLeft"]) {
      player.x -= moveSpeed;
    }
    if (keysRef.current["ArrowRight"]) {
      player.x += moveSpeed;
    }

    // Apply gravity
    player.velocityY += gravity;
    player.y += player.velocityY;

    // Check platform collisions
    let onPlatform = false;
    platformsRef.current.forEach((platform) => {
      if (
        player.velocityY > 0 &&
        player.y + player.height > platform.y &&
        player.y + player.height <
          platform.y + platform.height + player.velocityY &&
        player.x + player.width > platform.x &&
        player.x < platform.x + platform.width
      ) {
        player.y = platform.y - player.height;
        player.velocityY = 0;
        player.isJumping = false;
        onPlatform = true;
      }
    });

    // Check coin collisions
    coinsRef.current.forEach((coin) => {
      if (!coin.collected && checkCollision(player, coin)) {
        coin.collected = true;
        setScore((prev) => prev + 100);
      }
    });

    // Check finish line collision
    const finish = finishLineRef.current;
    if (
      player.x < finish.x + finish.width &&
      player.x + player.width > finish.x &&
      player.y < finish.y + finish.height &&
      player.y + player.height > finish.y
    ) {
      setGameWon(true);
      return;
    }

    // Check for falling into pits (death)
    if (player.y > 450) {
      setGameOver(true);
      return;
    }

    // Jump if space is pressed and player is on a platform
    if (keysRef.current[" "] && !player.isJumping && onPlatform) {
      player.velocityY = jumpForce;
      player.isJumping = true;
    }




    // Keep player in bounds
    player.x = Math.max(0, Math.min(770, player.x));

    // Draw background
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, 800, 450);

    // Draw platforms
    ctx.fillStyle = "#8B4513";
    platformsRef.current.forEach((platform) => {
      ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    });

    // Draw coins
    coinsRef.current.forEach((coin) => {
      if (!coin.collected) {
        ctx.fillStyle = "#FFD700";
        ctx.beginPath();
        ctx.arc(
          coin.x + coin.width / 2,
          coin.y + coin.height / 2,
          coin.width / 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    });

    // Draw finish line
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(finish.x, finish.y, finish.width, finish.height);

    // Draw player
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Draw score
    ctx.fillStyle = "#000000";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 20, 30);

    animationFrameRef.current = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysRef.current[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      stopGame();
    };
  }, []);

  const startGame = () => {
    // Reset game state
    setGameStarted(true);
    setGameOver(false);
    setGameWon(false);
    setScore(0);

    // Reset player position
    playerRef.current = {
      x: 50,
      y: 200,
      width: 30,
      height: 30,
      velocityY: 0,
      isJumping: false,
    };

    // Reset coins
    coinsRef.current = initialCoins.map((coin) => ({
      ...coin,
      collected: false,
    }));

    // Clear any existing animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Start new game loop
    animationFrameRef.current = requestAnimationFrame(gameLoop);
  };
  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={800}
          height={450}
          className="border-2 border-gray-300 rounded-lg"
        />
        {(!gameStarted || gameOver || gameWon) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            {gameOver && (
              <div className="text-white text-2xl mb-4">Game Over!</div>
            )}
            {gameWon && (
              <div className="text-white text-2xl mb-4">
                Level Complete! Score: {score}
              </div>
            )}
            <button
              onClick={startGame}
              className="px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              {gameOver || gameWon ? "Play Again" : "Start Game"}
            </button>
          </div>
        )}
      </div>
      <div className="text-center space-y-2">
        <p className="text-lg font-semibold">Controls:</p>
        <p>Arrow Left/Right: Move</p>
        <p>Space: Jump</p>
        <p>Collect all coins and reach the green finish line!</p>
      </div>
    </div>
  );
};

export default PlatformGame;

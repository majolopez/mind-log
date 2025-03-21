-- CreateTable
CREATE TABLE "Thought" (
    "id" SERIAL NOT NULL,
    "situation" TEXT NOT NULL,
    "automatic_thought" TEXT NOT NULL,
    "emotion" TEXT NOT NULL,
    "alternative_thought" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Thought_pkey" PRIMARY KEY ("id")
);

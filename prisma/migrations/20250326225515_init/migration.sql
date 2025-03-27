-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "local_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT,
    "image_url" TEXT,
    "email" TEXT,
    "occupation" TEXT,
    "notes" TEXT,
    "is_favorite" BOOLEAN NOT NULL DEFAULT false,
    "last_synced_at" TIMESTAMP(3),
    "edited_at" BIGINT,
    "edited_at_timestamp" TIMESTAMP,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

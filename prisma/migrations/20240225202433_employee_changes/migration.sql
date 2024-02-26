-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "isadmin" BOOLEAN NOT NULL DEFAULT false,
    "createat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_pk" PRIMARY KEY ("id")
);

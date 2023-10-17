CREATE TABLE "public"."key_tx" ("tx_hash" citext NOT NULL, "trader" citext NOT NULL, "subject" citext NOT NULL, "buy" boolean NOT NULL, "share_amount" numeric(78,0) NOT NULL, "eth_amount" numeric(78,0) NOT NULL, "protocol_fee_amount" numeric(78,0) NOT NULL, "subject_fee_amount" numeric(78,0) NOT NULL, "supply" numeric(78,0) NOT NULL, "created_at" timestamp NOT NULL DEFAULT now(), PRIMARY KEY ("tx_hash") );

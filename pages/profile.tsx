import { getSession } from "next-auth/react";
import { MouseEventHandler, useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";

import { ProfileProps } from "@/lib/types";

import prisma from "@/prisma/prisma";

import Layout from "@/components/Layout";

import rerouteNoAuth from "@/lib/utils/rerouteNoAuth";

import styles from "@/styles/pages/profile.module.css";
import UpdateBanner from "@/components/items/UpdateBanner";

export async function getServerSideProps({
  req,
  res
}: GetServerSidePropsContext) {
  const session = await getSession({ req });
  if (!session) return rerouteNoAuth(res);

  const user = await prisma.user.findUnique({
    include: { topics: true },
    where: {
      email: session.user?.email as string
    }
  });

  if (!user) return;

  const props = {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
    topics: user.topics
  };

  return { props };
}

export default function Profile({ image, email, name, topics }: ProfileProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");

  let currentTopics = topics.map((item) => item.id);

  const getId: MouseEventHandler<HTMLButtonElement> = (event) => {
    const btn = event.currentTarget;
    const active = btn.ariaPressed;

    if (active === "false") {
      if (currentTopics.length > 2) return;

      currentTopics.push(btn.id);
      btn.ariaPressed = "true";
    } else {
      currentTopics = currentTopics.filter((id) => btn.id !== id);
      btn.ariaPressed = "false";
    }
  };

  async function saveTopics() {
    setUpdateMessage("Updating preferences...");
    setIsUpdating(true);

    const newTopics = currentTopics.map((item) => {
      return { id: item };
    });

    const response = await fetch(`/api/updateTopics`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTopics)
    });

    if (!response.ok) {
      const err = await response.json();
      setUpdateMessage(err.message);
      setIsUpdating(false);
      throw new Error(err.message);
    }

    setUpdateMessage("Topics updated");
    setIsUpdating(false);

    const updatedUser = await response.json();
    return updatedUser;
  }

  const src =
    image ||
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  return (
    <Layout>
      <UpdateBanner msg={updateMessage} hidden={!isUpdating} />
      <div className={styles.header}>
        <div>
          <Image
            src={src}
            alt='Profile image'
            width={75}
            height={75}
            loader={() => src}
            unoptimized
            className={styles.profileImg}
            referrerPolicy='no-referrer'
          />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.topicsContainer}>
        <h2>Topics</h2>
        <p>Choose up to three topics to follow:</p>

        <div className={styles.topics}>
          <button
            id='clfzcdg3c000008l00pymefki'
            aria-pressed={currentTopics.includes("clfzcdg3c000008l00pymefki")}
            onClick={getId}
          >
            #Business
          </button>

          <button
            id='clfzce5jj000108l07be74phs'
            aria-pressed={currentTopics.includes("clfzce5jj000108l07be74phs")}
            onClick={getId}
          >
            #Entertainment
          </button>

          <button
            id='clfzcenb9000208l0e3h0gazf'
            aria-pressed={currentTopics.includes("clfzcenb9000208l0e3h0gazf")}
            onClick={getId}
          >
            #General
          </button>

          <button
            id='clfzcf4hf000308l0539n3w2w'
            aria-pressed={currentTopics.includes("clfzcf4hf000308l0539n3w2w")}
            onClick={getId}
          >
            #Health
          </button>

          <button
            id='clfzcflgw000408l04sx5g6ar'
            aria-pressed={currentTopics.includes("clfzcflgw000408l04sx5g6ar")}
            onClick={getId}
          >
            #Science
          </button>

          <button
            id='clfzcfxvs000508l0cxhl4jwk'
            aria-pressed={currentTopics.includes("clfzcfxvs000508l0cxhl4jwk")}
            onClick={getId}
          >
            #Sports
          </button>

          <button
            id='clfzcgesv000608l04n7q2gd5'
            aria-pressed={currentTopics.includes("clfzcgesv000608l04n7q2gd5")}
            onClick={getId}
          >
            #Technology
          </button>
        </div>

        <button onClick={saveTopics} className={styles.saveBtn}>
          Save Topics
        </button>
      </div>
    </Layout>
  );
}

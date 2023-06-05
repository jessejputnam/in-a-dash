import { getSession } from "next-auth/react";
import { MouseEventHandler as MEH, useState } from "react";
import { GetServerSidePropsContext as GSP } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ProfileProps } from "@/lib/types";
import prisma from "@/prisma/prisma";
import Layout from "@/components/Layout";
import rerouteNoAuth from "@/lib/utils/rerouteNoAuth";

import styles from "@/styles/pages/profile.module.css";
import UpdateBanner from "@/components/items/UpdateBanner/UpdateBanner";

export async function getServerSideProps({ req, res }: GSP) {
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
  const router = useRouter();
  const refreshData = () => router.replace(router.asPath);

  let currentTopics = topics.map((item) => item.id);

  const getId: MEH = (event) => {
    const btn = event.currentTarget;
    const active = btn.ariaPressed == "true" ? true : false;
    if (!active && currentTopics.length > 2) return;

    if (!active) currentTopics.push(btn.id);
    else currentTopics = currentTopics.filter((id) => btn.id !== id);

    btn.ariaPressed = active ? "false" : "true";
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
    refreshData();
    return updatedUser;
  }

  const src =
    image ||
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  const ids = [
    "clfzcdg3c000008l00pymefki",
    "clfzce5jj000108l07be74phs",
    "clfzcenb9000208l0e3h0gazf",
    "clfzcf4hf000308l0539n3w2w",
    "clfzcflgw000408l04sx5g6ar",
    "clfzcfxvs000508l0cxhl4jwk",
    "clfzcgesv000608l04n7q2gd5"
  ];

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
            id={ids[0]}
            aria-pressed={currentTopics.includes(ids[0])}
            onClick={getId}
          >
            #Business
          </button>

          <button
            id={ids[1]}
            aria-pressed={currentTopics.includes(ids[1])}
            onClick={getId}
          >
            #Entertainment
          </button>

          <button
            id={ids[2]}
            aria-pressed={currentTopics.includes(ids[2])}
            onClick={getId}
          >
            #General
          </button>

          <button
            id={ids[3]}
            aria-pressed={currentTopics.includes(ids[3])}
            onClick={getId}
          >
            #Health
          </button>

          <button
            id={ids[4]}
            aria-pressed={currentTopics.includes(ids[4])}
            onClick={getId}
          >
            #Science
          </button>

          <button
            id={ids[5]}
            aria-pressed={currentTopics.includes(ids[5])}
            onClick={getId}
          >
            #Sports
          </button>

          <button
            id={ids[6]}
            aria-pressed={currentTopics.includes(ids[6])}
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

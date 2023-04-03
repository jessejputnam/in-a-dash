import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { MouseEventHandler, useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";

import { ProfileProps } from "@/lib/types";

import prisma from "@/prisma/prisma";

import Layout from "@/components/Layout";
import Loading from "@/components/Loading";

import styles from "@/styles/pages/profile.module.css";

export async function getServerSideProps({
  req,
  res
}: GetServerSidePropsContext) {
  const session = await getSession({ req });

  if (!session) {
    res.writeHead(302, {
      Location: "/"
    });
    res.end();
    return { props: {} };
  }
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
  // const { data: session } = useSession();
  const [topicCount, setTopicCount] = useState(topics.length);

  const getId: MouseEventHandler<HTMLButtonElement> = (event) => {
    const btn = event.currentTarget;
    const active = btn.ariaPressed;

    if (btn.ariaPressed === "false") {
      if (topicCount > 2) return;

      setTopicCount(topicCount + 1);
      btn.ariaPressed = "true";
    } else {
      setTopicCount(topicCount - 1);
      btn.ariaPressed = "false";
    }
  };

  const src =
    image ||
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  return (
    <Layout>
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
          />
        </div>
        <div>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.topicsContainer}>
        <h2>Topics</h2>
        <p>Choose up to three topics to follow:</p>

        <div className={styles.topics}>
          <button
            id='clfzcgesv000608l04n7q2gd5'
            aria-pressed='false'
            onClick={getId}
          >
            #Business
          </button>

          <button
            id='clfzce5jj000108l07be74phs'
            aria-pressed='false'
            onClick={getId}
          >
            #Entertainment
          </button>

          <button
            id='clfzcenb9000208l0e3h0gazf'
            aria-pressed='false'
            onClick={getId}
          >
            #General
          </button>

          <button
            id='clfzcf4hf000308l0539n3w2w'
            aria-pressed='false'
            onClick={getId}
          >
            #Health
          </button>

          <button
            id='clfzcflgw000408l04sx5g6ar'
            aria-pressed='false'
            onClick={getId}
          >
            #Science
          </button>

          <button
            id='clfzcfxvs000508l0cxhl4jwk'
            aria-pressed='false'
            onClick={getId}
          >
            #Sports
          </button>

          <button
            id='clfzcgesv000608l04n7q2gd5'
            aria-pressed='false'
            onClick={getId}
          >
            #Technology
          </button>
        </div>

        <button className={styles.saveBtn}>Save Topics</button>
      </div>
    </Layout>
  );
}

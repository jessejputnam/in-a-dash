import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { MouseEventHandler, useEffect } from "react";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";

import { ProfileProps } from "@/lib/types";

import prisma from "@/prisma/prisma";

import Layout from "@/components/Layout";
import Loading from "@/components/Loading";

import styles from "@/styles/pages/profile.module.css";

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const session = await getSession({ req });

  if (session) {
    const user = await prisma.user.findUnique({
      include: { topics: true },
      where: {
        email: session.user?.email as string
      }
    });

    if (!user) return;

    const user1 = {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      topics: user.topics
    };

    return { props: user1 };
  }
}

const getId: MouseEventHandler<HTMLButtonElement> = (event) => {
  const target = event.currentTarget;
  if (target) {
    console.log(target.getAttribute("data-id"));
    target.ariaPressed = target.ariaPressed === "true" ? "false" : "true";
  }
};

export default function Profile(props: ProfileProps) {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  // console.log("REQ", props);

  const user = session?.user;

  useEffect(() => {
    if (!user) push("/");
  }, [user, push]);

  if (!user)
    return (
      <div className={styles.loadingContainer}>
        <Loading />
      </div>
    );

  const src =
    user.image ||
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
          <h1>{user?.name}</h1>
          <p>{user?.email}</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.topicsContainer}>
        <h2>Topics</h2>
        <p>Choose up to three topics to follow:</p>

        <div className={styles.topics}>
          <button
            id='business'
            data-id={"clfzcgesv000608l04n7q2gd5"}
            aria-pressed='false'
            onClick={getId}
          >
            #Business
          </button>

          <button
            id='entertainment'
            data-id={"clfzce5jj000108l07be74phs"}
            aria-pressed='false'
            onClick={getId}
          >
            #Entertainment
          </button>

          <button
            id='general'
            data-id={"clfzcenb9000208l0e3h0gazf"}
            aria-pressed='false'
            onClick={getId}
          >
            #General
          </button>

          <button
            id='health'
            data-id={"clfzcf4hf000308l0539n3w2w"}
            aria-pressed='false'
            onClick={getId}
          >
            #Health
          </button>

          <button
            id='science'
            data-id={"clfzcflgw000408l04sx5g6ar"}
            aria-pressed='false'
            onClick={getId}
          >
            #Science
          </button>

          <button
            id='sports'
            data-id={"clfzcfxvs000508l0cxhl4jwk"}
            aria-pressed='false'
            onClick={getId}
          >
            #Sports
          </button>

          <button
            id='technology'
            data-id={"clfzcgesv000608l04n7q2gd5"}
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

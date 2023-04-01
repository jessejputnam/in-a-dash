import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetServerSideProps } from "next";

import Image from "next/image";

import prisma from "@/prisma/prisma";

import Layout from "@/components/Layout";
import Loading from "@/components/Loading";

import styles from "@/styles/pages/profile.module.css";

// export async function getServerSideProps() {
//   const users = await prisma.user.findMany();
//   return { users };
// }

export default function Profile() {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const loading = status === "loading";

  const user = session?.user;
  const src =
    user?.image ||
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  useEffect(() => {
    if (!user) push("/");
  }, [user, push]);

  if (!user)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px"
        }}
      >
        <Loading />
      </div>
    );

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
          <button id='business' aria-pressed='false'>
            #Business
          </button>

          <button id='entertainment' aria-pressed='false'>
            #Entertainment
          </button>

          <button id='general' aria-pressed='false'>
            #General
          </button>

          <button id='health' aria-pressed='false'>
            #Health
          </button>

          <button id='science' aria-pressed='false'>
            #Science
          </button>

          <button id='sports' aria-pressed='false'>
            #Sports
          </button>

          <button id='technology' aria-pressed='false'>
            #Technology
          </button>
        </div>

        <button className={styles.saveBtn}>Save Topics</button>
      </div>
    </Layout>
  );
}

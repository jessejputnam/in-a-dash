import styles from "@/styles/sections/NoAuthHome.module.css";

export default function NoAuthHome() {
  return (
    <div className={styles.container}>
      <h1>In a Dash</h1>
      <p>
        A personal dashboard for all your interests. Choose preferences in
        topics and you will gain access to news, blogs, posts, videos, etc
        personalized to your own taste.
      </p>
      <p>
        When you find anything that interests you, you can save it to personal
        boards for later access. You can also share and comment saved boards or
        saved items with friends.
      </p>
    </div>
  );
}

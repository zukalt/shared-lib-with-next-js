import Head from 'next/head'
import {SharedButton} from "../lib/SharedButton";
import {Paper} from "../lib/Paper";

export default function Home() {
  return (
    <Paper>
      <Head>
        <title>Library showcase</title>
      </Head>

      <main>
        <h3>
          Buttons
        </h3>

        <p>
          <SharedButton>Click me</SharedButton>
        </p>

      </main>
    </Paper>
  )
}

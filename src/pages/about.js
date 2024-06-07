import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

export default function About() {
    return (
        <Layout>
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>
                            I'm baby coloring book poke taxidermy
                        </h2>
                        <p>
                            Daniel Craig best James Bond
                        </p>
                        <p>
                            Casino Royale best bond movie
                        </p>
                        <Link to="/contact" className="btn">contact</Link>
                    </article>
                    <StaticImage src="../assets/images/about.jpeg" alt='person pouring salt in a bowl' className="about-img" placeholder="blurred" />
                </section>
            </main>
        </Layout>
    )
}

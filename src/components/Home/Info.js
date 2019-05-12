import React from "react"
import { Link } from "gatsby"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dolore impedit blanditiis totam molestias at perspiciatis non
              accusantium. Qui in eius minima temporibus repellat, sint fugiat
              animi! Suscipit quia adipisci impedit facilis et? Hic ipsam quasi
              minus cumque voluptatum molestiae aliquam maiores dolore quos
              ullam impedit dolorum sit animi labore quaerat ratione corporis,
              aperiam atque laudantium sequi. Officia id sequi commodi illo nisi
              assumenda at, laudantium consequatur nihil autem sint praesentium
              numquam laborum itaque aut consequuntur et. Vitae reiciendis nulla
              repellendus temporibus inventore consequatur unde tempore eum aut
              modi, quasi nobis ducimus, quas voluptatem provident amet
              exercitationem molestiae? Ullam, libero.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

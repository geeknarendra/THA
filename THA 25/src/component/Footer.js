

export default function Footer() {
   

    return (
        <>
            <div className="bg-info d-flex justify-content-evenly px-5 py-5" >
                <div className="mx-5 w-50" >
                    <h2>Parter With Business Leader</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi ipsam voluptate, cum, sed, laboriosam explicabo magni similique dolorum repudiandae debitis minus rem fugit ad! Distinctio possimus unde itaque vero.</p>
                </div>
                <a className="btn btn-danger fs-4 h-50 my-5" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" >
                    Read More
                </a>
              
            </div>

            <div className="offcanvas offcanvas-start text-white bg-dark p-3" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header ">
                    <h3 className="offcanvas-title text-danger " id="offcanvasExampleLabel">Read More</h3>
                    <button type="button" className="btn-close bg-warning " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, officia autem! Nam autem magni voluptate suscipit! Vel voluptatem reiciendis repellat aut ipsa omnis facere officiis, qui aliquam! Iusto, ab molestiae dolores vitae qui optio ullam maxime labore omnis. Officia, mollitia! Perspiciatis quos sed ipsam. Maxime perferendis dolorem ad voluptatum vitae labore neque rerum esse deleniti, dolorum possimus repudiandae quidem nisi officiis fugiat voluptatibus impedit. Officia maxime quam nihil quasi ea quisquam quaerat deleniti numquam, at sint libero rem illo nesciunt asperiores natus eaque illum ipsam fuga? Magnam neque expedita ad sint accusantium, molestiae nulla beatae veniam quibusdam voluptates eveniet reiciendis?
                    </div>

                </div>
            </div>
        </>
    )
}
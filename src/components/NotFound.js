import React from 'react'
import "../css/Detail.css"

function NotFound() {
    return (
        <div>
            <div className={"bg"} style={{
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}>
                <div className={"not_found"}>
                    <h1 className={"title"}>
                        Movie Not Found
                    </h1>
                    <h1 className={"description"}>
                        We are sorry but the movie you are looking for cannot be found. Go back to the previous Page or the Home page.
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default NotFound

import React from "react"
import ContentLoader from "react-content-loader";

const Loader = () => {
    return (
        <ContentLoader
            speed={2}
            width={232}
            height={342}
            viewBox="0 0 232 342"
            backgroundColor="#dae0e2"
            foregroundColor="#c4c4c4"
        >
            <rect x="77" y="129" rx="0" ry="0" width="0" height="1" />
            <rect x="46" y="22" rx="0" ry="0" width="128" height="210" />
            <rect x="21" y="294" rx="0" ry="0" width="60" height="25" />
            <rect x="135" y="293" rx="0" ry="0" width="60" height="30" />
            <rect x="23" y="246" rx="0" ry="0" width="171" height="37" />
        </ContentLoader>
    )
}

const MyLoader = () => {

    let load = new Array(20).fill(0).map((_, index) => <Loader key={index}/>)

    return (
        <div className="content">
            <div className="container">
                <div className="content__title">Все книги</div>
                <div className="content__items">
                    {load}
                </div>
            </div>
        </div>
    )
}

export default MyLoader
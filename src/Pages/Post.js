import {useParams, useLocation} from "react-router-dom"

const Post = () => {

    const {id} = useParams()

    const query = new URLSearchParams(useLocation().search)

    return (
        <>
            <h2>
                Id is = {id}
            </h2>
            <h2>
                {query.get("last")}
            </h2>
            <h2>
                {query.get("name")}
            </h2>
        </>
    )
}

export default Post
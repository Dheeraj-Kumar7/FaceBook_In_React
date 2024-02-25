import React, { useContext } from 'react'
import { PostListStore } from '../Store/PostStore'
import { AiFillDelete } from "react-icons/ai"
const Post = ({ itemPost }) => {
      const { deletePost } = useContext(PostListStore)
      return (
            <>
                  <div className="card post-card" style={{ width: "28rem" }}>
                        <div className="card-body">
                              <h5 className="card-title">{itemPost.userId}
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(itemPost.id)}>
                                          <AiFillDelete />
                                    </span>
                              </h5>
                              <p className="card-text">{itemPost.body}</p>
                              {itemPost.tags.map((item) => <span className="badge text-bg-primary hastag" key={item} >{item}</span>)}

                              <div className="alert alert-success reactions" role='alert'>
                                    this post has been reacted by {itemPost.reactions} peaople
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Post
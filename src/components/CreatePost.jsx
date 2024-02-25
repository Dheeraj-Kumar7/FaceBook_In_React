import React, { useContext } from 'react'
import { useRef } from 'react'
import { PostListStore } from '../Store/PostStore'
const CreatePost = () => {
      const { addPost } = useContext(PostListStore)

      const InputId = useRef()
      const InputTitle = useRef()
      const InputBody = useRef()
      const InputContent = useRef()
      const InputReactions = useRef()

      const handleFormSubmit = (event) => {
            event.preventDefault();
            const SaveId = InputId.current.value
            const SaveTitle = InputTitle.current.value
            const SaveBody = InputBody.current.value.split(" ")
            const SaveContent = InputContent.current.value
            const SaveReactions = InputReactions.current.value
            addPost(SaveId, SaveTitle,SaveBody,SaveContent,SaveReactions)
            InputId.current.value=""
            InputTitle.current.value=""
            InputBody.current.value=""
            InputContent.current.value=""
            InputReactions.current.value=""
      }
      return (
            <form className='create-post' onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                        <label htmlFor="UserId" className="form-label">UserId</label>
                        <input type="text" className="form-control" id="UserId" placeholder="UserId"
                              ref={InputId}
                        />
                  </div>
                  <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="title"
                              ref={InputTitle}
                        />
                  </div>
                  <div className="mb-3">
                        <label htmlFor="body" className="form-label">body</label>
                        <input type="text" className="form-control" id="body" placeholder="body"
                              ref={InputBody}
                        />
                  </div>
                  <div className="mb-3">
                        <label htmlFor="postContent" className="form-label">postContent</label>
                        <textarea name="postContent" id="postContent" cols="80" rows="6" ref={InputContent}>
                        </textarea>
                  </div>
                  <div className="mb-3">
                        <label htmlFor="reactions" className="form-label">reactions</label>
                        <input type="text" className="form-control" id="reactions" placeholder="reactions"
                              ref={InputReactions}
                        />
                  </div>

                  <button type='submit' className="btn btn-primary hastag" >submit</button>
            </form>
      )
}

export default CreatePost
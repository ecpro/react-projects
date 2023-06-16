import React from 'react';
import Comment from "./Comment";
import comment from "./Comment";


const commentsData = [
    {
        name: 'Level 1',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus',
        reply: [
            {
                name: 'Level 2',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus',
                reply: [
                    {

                        name: 'Level 3',
                        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus',
                        reply: []
                    }
                ]
            }
        ]
    },
    {
        name: 'John Doe',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus',
        reply: [
            {
                name: 'John Doe',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus',
                reply: [
                    {
                        name: 'John Doe',
                        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus',
                        reply: []
                    }
                ]
            }
        ]
    },
    {
        name: 'John Doe',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus',
        reply: []
    },
    {
        name: 'John Doe',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam dapibus',
        reply: []
    }
]

const CommentsList = ({comments}) => {
    return comments.map((comment, index) => (
        <div className=''>
            <Comment key={index} {...comment}/>
            <div className='ml-4 pl-2 pt-2 border-2 border-l-black'>
                <CommentsList comments={comment.reply}/>
            </div>
        </div>
    ))
}


function CommentsContainer() {
    return (
        <div className='pt-4'>
            <h1 className='text-2xl font-bold mb-4'>Comments:</h1>
            <CommentsList comments={commentsData}/>
        </div>
    );
}

export default CommentsContainer;

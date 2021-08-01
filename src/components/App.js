import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div>
            <CommentBox />
            <CommentList />
        </div>
    );
};
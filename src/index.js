import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard >
        <CommentDetail
          author="Sam"
          timeAgo="Today at 1pm"
          content="1st comment"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 2pm" content="2nd comment" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Today at 6pm"content="3rd comment" avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

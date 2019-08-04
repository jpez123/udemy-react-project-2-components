//Import React & ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

//Imports components
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

//Nested Components (passing props)
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    comment="First!" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00AM" 
                    comment="Second Post!" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:45PM" 
                    comment="Aha!" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    );
};


//Renders to the DOM
ReactDOM.render(<App />, document.querySelector('#root'));
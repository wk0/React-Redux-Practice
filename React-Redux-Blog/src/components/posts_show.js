import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

// currently depends on the huge list of post...
//  going to try to just pass in one 
class PostsShow extends Component {
    componentDidMount(){
        // If you do not want to refetch Posts, eg reduce network cost
        // at risk of showing stale data, can wrap this with 
        // if (!this.props.post) {}

        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }
    
    onDeleteClick(){
        const {id} = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    //helperFunction(){
    //    this.props.post
    //}

    render() {
        //posts[this.props.match.params.id]; // the post we want to show
        //this.props.post;

        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link className="btn btn-primary" to="/">Back To Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>

                <h3> {post.title} </h3>
                <h6> Categories: {post.categories} </h6>
                <p> {post.content} </p>
            </div>
        );
    }
}

function mapStateToProps( { posts }, ownProps){
    //return { posts };
    return {post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
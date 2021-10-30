import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
class Like extends React.Component {
    render() {
        return (
            <div className="like">
                {this.props.isLiked ? (
                    <FontAwesomeIcon
                        icon={fullHeart}
                        onClick={() => this.props.onLike(false)}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={emptyHeart}
                        onClick={() => this.props.onLike(true)}
                    />
                )}
            </div>
        );
    }
}

export default Like;

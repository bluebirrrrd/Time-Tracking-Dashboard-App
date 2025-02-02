import React from "react";
import { ReactComponent as Icon } from "./images/icon-work.svg";
import "./Card.css";

class Card extends React.Component {
  render() {
    const activityTitle = this.props.activityTitle || "";
    return (
      <article class="background-card" id={activityTitle.toLowerCase()}>
        <Icon />
        <div class="card-body">
          <p class="activity-titles">{activityTitle}</p>
          <p class="time">{this.props.time}hrs</p>
          <p class="previous-time">Previous {this.props.previousTime}hrs</p>
        </div>
      </article>
    );
  }
}

export default Card;

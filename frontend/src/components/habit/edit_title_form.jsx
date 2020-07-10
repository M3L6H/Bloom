import React from 'react';

export default class EditTitleForm extends React.Component {
  constructor(props) {
    super(props);

    this.textarea = React.createRef();

    this.state = {
      title: props.title
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    const range = document.createRange();
    const selected = window.getSelection();
    range.setStartBefore(this.textarea.current.childNodes[0]);
    range.setEndAfter(this.textarea.current.childNodes[this.textarea.current.childNodes.length - 1]);
    selected.removeAllRanges();
    selected.addRange(range);
    this.textarea.current.focus();
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  //get updated title to update habit
  handleSubmit(e) {
    e.preventDefault();
            
    //habit title needs to be updated
    const title = this.textarea.current.innerHTML
      .replace(/<div>|<br>/g, "\n")
      .replace(/<\/div>/g, "");
    this.props.updateHabit({ ...this.props.habit, title });
    this.props.hideEditForm(title);
  }

  //when edit title form is triggered, it renders edit form
  render() {
          
      const { title } = this.state;
      if (title === undefined || title === null) return null; 

      return (
        <div className={`title-edit`}>
          <div className="title-edit-container">
            <pre
              contentEditable={ true }
              ref={ this.textarea }
              type="text"
              className="edit-title-input"
              suppressContentEditableWarning={true}
              onBlur={ this.handleSubmit }
              onKeyDown={ this.handleKeyDown }
            >{ title }</pre>
          </div>
        </div>
      );
  }
};
            
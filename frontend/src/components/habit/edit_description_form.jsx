import React from 'react';

export default class EditDescriptionForm extends React.Component {
  constructor(props) {
    super(props);

    this.textarea = React.createRef();

    this.state = {
      description: props.description
    }

    this.handleSubmit = this.handleSubmit.bind(this);
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

  //get updated description to update habit
  handleSubmit(e) {
    e.preventDefault();
            
    //habit description needs to be updated
    const description = this.textarea.current.innerHTML
      .replace(/<div>|<br>/g, "\n")
      .replace(/<\/div>/g, "");
    this.props.updateHabit({ ...this.props.habit, description });
    this.props.hideEditForm(description);
  }

  //when edit description form is triggered, it renders edit form
  render() {
          
      const { open } = this.props;
      const { description } = this.state;
      if (!description) return null; 

      return (
        <div className={`description-edit ${open}`}>
          <div className="description-edit-container">
            <pre
              contentEditable={ true }
              ref={ this.textarea }
              type="text"
              className="edit-description-input"
              suppressContentEditableWarning={true}
              onBlur={ this.handleSubmit }
            >{ description }</pre>
          </div>
        </div>
      );
  }
};
            
import {Component} from 'react'

import {
  BgContainer,
  CardContainer,
  Heading,
  InputContainer,
  Input,
  Button,
  Para,
} from './styledComponents'

class EditableText extends Component {
  state = {inputText: '', isEdited: true}

  onChangeText = event => {
    this.setState({inputText: event.target.value})
  }

  updateStatus = () => {
    this.setState(prev => ({
      isEdited: !prev.isEdited,
    }))
  }

  render() {
    const {inputText, isEdited} = this.state
    return (
      <BgContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isEdited ? (
              <Input
                type="text"
                value={inputText}
                onChange={this.onChangeText}
              />
            ) : (
              <Para>{inputText}</Para>
            )}
            {isEdited ? (
              <Button onClick={this.updateStatus}>Save</Button>
            ) : (
              <Button onClick={this.updateStatus}>Edit</Button>
            )}
          </InputContainer>
        </CardContainer>
      </BgContainer>
    )
  }
}
export default EditableText

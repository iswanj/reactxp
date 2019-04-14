import React from 'react';
import RX from 'reactxp';

import { ComponentBase } from 'resub';

import styles from './styles';

import TodosStore from './store/todoStore';

interface TodoListState {
  todos?: string[];
  textInputValue?: string;
}

export class App extends ComponentBase<{}, TodoListState> {
  protected _buildState(): TodoListState {
    return {
      todos: TodosStore.getTodos(),
      textInputValue: TodosStore.getTextInputValue()
    }
  }

  public render() {
    const { textInputValue } = this.state;
    return (
      <RX.View style={styles.main}>
        <RX.View style={styles.header}>
          <RX.Text style={styles.title}>To Do List</RX.Text>
        </RX.View>

        <RX.View style={styles.todoContainer}>
          {this.state.todos && this.state.todos.map(this.renderTodoItems)}
          <RX.TextInput value={textInputValue} onChangeText={this.handleTextChange} style={styles.input} />
          <RX.Button style={styles.addBtn} onPress={this.addTodo}>
            <RX.Text style={styles.addBtnText} >Add</RX.Text>
          </RX.Button>
        </RX.View>
      </RX.View>
    );
  }

  renderTodoItems = (item: string, index: number) => {
    return (
      <RX.View key={index} style={styles.todoItem}>
        <RX.Text style={styles.todoItemText}>{item}</RX.Text>
        <RX.Button style={styles.deleteButton} onPress={() => this.deleteTodo(item)}>
          <RX.Text style={styles.deleteButtonText}>X</RX.Text>
        </RX.Button>
      </RX.View>
    )
  }

  addTodo = () => {
    const { textInputValue } = this.state;
    if (textInputValue) {
      TodosStore.addTodo(textInputValue);
    } else {
      RX.Alert.show("Required Value!", "ToDo Text is required...");
    }
  }

  deleteTodo = (text: string) => {
    TodosStore.deleteTodo(text);
  }

  handleTextChange = (text: string) => {
    TodosStore.updateTextInputValue(text);
  }
}

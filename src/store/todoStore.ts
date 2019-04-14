import { StoreBase, AutoSubscribeStore, autoSubscribeWithKey } from 'resub';

const TriggerKeys = {
    InputTextKey: 'input',
    TodosChangedKey: 'todos'
}

@AutoSubscribeStore
class TodosStore extends StoreBase {
    private _todos: string[] = [];
    private _textInputValue: string = '';

    updateTextInputValue(value: string) {
        this._textInputValue = value;
        this.trigger(TriggerKeys.InputTextKey)
    }

    addTodo(todo: string) {
        // Don't use .push here, we need a new array since the old _todos array was passed to the component by reference value
        this._todos = this._todos.concat(todo);
        this._textInputValue = '';
        this.trigger(TriggerKeys.TodosChangedKey);
    }

    deleteTodo(text: string) {
        this._todos = this._todos.filter((item: string) => item !== text);
        this.trigger(TriggerKeys.TodosChangedKey);
    }

    @autoSubscribeWithKey(TriggerKeys.TodosChangedKey)
    getTodos() {
        return this._todos
    }

    @autoSubscribeWithKey(TriggerKeys.InputTextKey)
    getTextInputValue() {
        return this._textInputValue
    }
}

export default new TodosStore();
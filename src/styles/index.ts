import RX from 'reactxp';

export default {
  main: RX.Styles.createViewStyle({
    flexDirection: 'column',
    flex: 1
  }),

  title: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
  }),

  header: RX.Styles.createViewStyle({
    maxWidth: 300,
    paddingTop: 20,
    paddingBottom: 20,
  }),

  todoContainer: RX.Styles.createViewStyle({
    maxWidth: 300,
    flex: 4,
    flexDirection: 'column'
  }),

  todoItem: RX.Styles.createViewStyle({
    flexDirection: 'row',
    paddingBottom: 5
  }),

  deleteButton: RX.Styles.createButtonStyle({
    backgroundColor: 'red',
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 500
  }),

  deleteButtonText: RX.Styles.createTextStyle({
    color: '#FFF'
  }),

  todoItemText: RX.Styles.createTextStyle({
    flex: 8,
    flexDirection: 'row',
    fontSize: 16,
    textAlign: 'left',
    paddingBottom: 5
  }),

  input: RX.Styles.createTextInputStyle({
    height: 40,
    fontSize: 18,
    padding: 5,
    borderWidth: 1,
    borderColor: '#CCC'
  }),
  addBtn: RX.Styles.createButtonStyle({
    backgroundColor: '#0099FF',
    padding: 10,
  }),
  addBtnText: RX.Styles.createTextStyle({
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16
  })
};

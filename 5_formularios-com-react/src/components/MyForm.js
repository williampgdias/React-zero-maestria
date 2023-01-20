import './MyForm.css';
const MyForm = () => {
  return (
    <div>
      {/* 1 - criacao de form */}
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' placeholder='Write your name' />
        </div>
        <input type="submit" value='Submit' />
      </form>
    </div>
  );
};

export default MyForm;

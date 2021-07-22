import './App.css'

import { useState } from 'react';

function AddItemForm({ addItem }) {
	const [title, setTitle] = useState('');
	const [calorie, setCalorie] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		addItem({ title, calorie });
		setTitle('');
		setCalorie('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div >
				<div className='me-3'>
					<label htmlFor='title'>
						Title
					</label>
					<input
						type='text'
						name='title'
						id='title'
						required
						value={title}
						onChange={e => setTitle(e.target.value)}
						placeholder='Item name'
					/>
				</div>
				<div>
					<label htmlFor='calorie' >
						Calorie
					</label>
					<input
						type='number'
						name='number'
						id='number'
						required
						value={calorie}
						onChange={e => setCalorie(e.target.value)}
						placeholder='Calorie amount'
					/>
				</div>
			</div>
			<button type='submit' >
				Add Item
			</button>
		</form>
	);
}



function RenderItem({ updateItem, removeItem, item, index }) {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<div >
			<div className='card-body'>
				{isEditing ? (
					<input
						type='text'
						name='title'
						id='title'
						required
						value={item.title}
						onChange={e => updateItem(index, { title: e.target.value })}
					/>
				) : (
					<h5 className='card-title'>{item.title}</h5>
				)}
				{isEditing ? (
					<input
						type='number'
						name='calorie'
						id='calorie'
						required
						value={item.calorie}
						onChange={e => updateItem(index, { calorie: e.target.value })}
					/>
				) : (
					<p >
						{' '}
						You have consumed {item.calorie} calories
					</p>
				)}
				<div className='d-flex '>
					<button className='btn btn-danger' onClick={() => removeItem(index)}>
						Delete
					</button>
					<button
						className='btn mx-3 btn-primary'
						onClick={() => setIsEditing(!isEditing)}>
						{isEditing ? 'Done' : 'Edit'}
					</button>
				</div>
			</div>
		</div>
	);
}

export default function App() {
	const [items, setItems] = useState([]);

	const updateItem = (index, newItem) => {
		setItems(
			items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
		);
	};

	const addItem = item => {
		setItems([...items, item]);
	};

	const removeItem = index => {
		setItems(items.filter((item, i) => i !== index));
	};

	return (
		<div className='container d-flex flex-column align-items-center'>
			<AddItemForm addItem={addItem} />
			{items.length === 0 ? (
				<h3 className='text-center mt-3'>Start Adding Items</h3>
			) : (
				items.map((item, index) => (
					<RenderItem
						item={item}
						key={index}
						index={index}
						updateItem={updateItem}
						removeItem={removeItem}
					/>
				))
			)}
		</div>
	);
}
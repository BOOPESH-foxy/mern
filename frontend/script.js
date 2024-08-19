// const apiUrl = '/api/goals';
const apiUrl = 'http://localhost:8000/api/goals';


document.getElementById('create-goal-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const id = document.getElementById('goal-id').value;
    const name = document.getElementById('goal-name').value;
    const department = document.getElementById('goal-department').value;
    const organisation = document.getElementById('goal-organisation').value;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, name, department, organisation }),
    });

    const result = await response.json();
    alert('Goal created: ' + JSON.stringify(result));
});

document.getElementById('update-goal-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const id = document.getElementById('update-id').value;
    const name = document.getElementById('update-name').value;
    const department = document.getElementById('update-department').value;
    const organisation = document.getElementById('update-organisation').value;

    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, department, organisation }),
    });

    const result = await response.json();
    alert('Goal updated: ' + JSON.stringify(result));
});

document.getElementById('delete-goal-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const id = document.getElementById('delete-id').value;

    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    });

    const result = await response.json();
    alert('Goal deleted: ' + JSON.stringify(result));
});

document.getElementById('list-goals-button').addEventListener('click', async () => {
    const response = await fetch(apiUrl);
    const goals = await response.json();

    const goalsList = document.getElementById('goals-list');
    goalsList.innerHTML = ''; // Clear previous list

    goals.forEach(goal => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${goal.id}, Name: ${goal.name}, Department: ${goal.department}, Organisation: ${goal.organisation}`;
        goalsList.appendChild(listItem);
    });
});

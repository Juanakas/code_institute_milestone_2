// Update user score when button is clicked
document.getElementById('submit-button').addEventListener('click', function() {
	const select = document.getElementById('cpu-choice');
	const selectedCPU = select.value;
	const score = userCPU[selectedCPU] || 0;
	document.getElementById('user-score').textContent = score + '%';
	document.getElementById('userCpuSelected').textContent = selectedCPU;

	// Calculate absolute difference with Juan's CPU
	const juanScore = juanCPU["AMD R7-5700G"] || 0;
	const diff = Math.abs(score - juanScore);
	document.getElementById('percentageDifference').textContent = diff + '%';

	// Display 'faster' or 'slower'
	const comparison = score > juanScore ? 'faster' : 'slower';
	document.getElementById('fastVSslow').textContent = comparison;
});
// CPU key-value pairs

const userCPU = {
	"Intel i7-14700K": 130,
	"Intel i5-14600K": 124,
	"Intel i3-14100F": 97,
	"AMD R7-9800X3D": 122,
	"AMD R5-8600G": 92,
	"AMD R3-5300G": 77,
};

const juanCPU = {
	"AMD R7-5700G": 88,
};

// Populate select list with userCPU keys
window.addEventListener('DOMContentLoaded', function() {
	const select = document.getElementById('cpu-choice');
	if (select) {
		Object.keys(userCPU).forEach(cpu => {
			const option = document.createElement('option');
			option.value = cpu;
			option.textContent = cpu;
			select.appendChild(option);
		});
	}
});

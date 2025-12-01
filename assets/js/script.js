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

// Cache DOM elements for better performance and maintainability
const cpuSelect = document.getElementById('cpu-choice');
const submitButton = document.getElementById('submit-button');
const userScoreElement = document.getElementById('user-score');
const userCpuSelectedElement = document.getElementById('userCpuSelected');
const percentageDifferenceElement = document.getElementById('percentageDifference');
const fastVsSlowElement = document.getElementById('fastVSslow');
const userScoreDisplay = document.getElementById('user-score-display');
const comparisonDisplay = document.getElementById('comparison-display');

// Populate select list with userCPU keys
window.addEventListener('DOMContentLoaded', function() {
	if (cpuSelect) {
		Object.keys(userCPU).forEach(cpu => {
			const option = document.createElement('option');
			option.value = cpu;
			option.textContent = cpu;
			cpuSelect.appendChild(option);
		});
	}
});

// Update user score when button is clicked
// Event listener with null check for progressive enhancement
if (submitButton) {
	submitButton.addEventListener('click', function() {
	const selectedCPU = cpuSelect.value;
	const score = userCPU[selectedCPU] || 0;
	
	// Show hidden elements
	userScoreDisplay.classList.remove('hidden');
	comparisonDisplay.classList.remove('hidden');
	
	userScoreElement.textContent = score + '%';
	userCpuSelectedElement.textContent = selectedCPU;

	// Calculate absolute difference with Juan's CPU
	const juanScore = juanCPU["AMD R7-5700G"] || 0;
	const diff = Math.abs(score - juanScore);
	percentageDifferenceElement.textContent = diff + '%';

	// Display 'faster' or 'slower'
	const comparison = score > juanScore ? 'faster' : 'slower';
	fastVsSlowElement.textContent = comparison;
	});
}

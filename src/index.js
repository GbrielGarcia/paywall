/**
 * Paywall - Simple payment reminder
 * Makes website fade out if payment is overdue
 */

function Paywall(config) {
  // Default configuration
  const defaults = {
    dueDate: null,
    daysDeadline: 60,
    effect: 'gradient', // 'gradient', 'solid', 'fade'
    color: '#ff0000',
    gradientFrom: '#ff0000',
    gradientTo: '#000000'
  };
  
  // Merge config with defaults
  this.config = { ...defaults, ...config };
  
  // Validate required fields
  if (!this.config.dueDate) {
    throw new Error('dueDate is required');
  }
  
  // Initialize protection
  this.init();
}

Paywall.prototype.init = function() {
  const due_date = new Date(this.config.dueDate);
  const days_deadline = this.config.daysDeadline;
  const current_date = new Date();
  
  const utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
  const utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
  const days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
  
  if (days > 0) {
    const days_late = days_deadline - days;
    let opacity = (days_late * 100 / days_deadline) / 100;
    opacity = (opacity < 0) ? 0 : opacity;
    opacity = (opacity > 1) ? 1 : opacity;
    
    if (opacity >= 0 && opacity <= 1) {
      this.applyEffect(opacity);
    }
  }
};

Paywall.prototype.applyEffect = function(opacity) {
  switch (this.config.effect) {
    case 'gradient':
      this.applyGradientEffect(opacity);
      break;
    case 'solid':
      this.applySolidEffect(opacity);
      break;
    case 'fade':
    default:
      this.applyFadeEffect(opacity);
      break;
  }
};

Paywall.prototype.applyGradientEffect = function(opacity) {
  // Remove existing overlay
  this.removeOverlay();
  
  // Create gradient overlay
  const overlay = document.createElement('div');
  overlay.id = 'paywall-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${this.config.gradientFrom} 0%, ${this.config.gradientTo} 100%);
    opacity: ${1 - opacity};
    z-index: 999999;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
    mix-blend-mode: multiply;
  `;
  
  // Add subtle message
  const message = document.createElement('div');
  message.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    opacity: 0.1;
    pointer-events: none;
    user-select: none;
    font-family: Arial, sans-serif;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  `;
  message.textContent = 'Pago Pendiente';
  overlay.appendChild(message);
  
  document.body.appendChild(overlay);
  this.overlay = overlay;
};

Paywall.prototype.applySolidEffect = function(opacity) {
  // Remove existing overlay
  this.removeOverlay();
  
  // Create solid overlay
  const overlay = document.createElement('div');
  overlay.id = 'paywall-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${this.config.color};
    opacity: ${1 - opacity};
    z-index: 999999;
    pointer-events: none;
    transition: opacity 0.3s ease-in-out;
  `;
  
  // Add subtle message
  const message = document.createElement('div');
  message.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    opacity: 0.1;
    pointer-events: none;
    user-select: none;
    font-family: Arial, sans-serif;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  `;
  message.textContent = 'Pago Pendiente';
  overlay.appendChild(message);
  
  document.body.appendChild(overlay);
  this.overlay = overlay;
};

Paywall.prototype.applyFadeEffect = function(opacity) {
  // Remove any existing overlay
  this.removeOverlay();
  
  // Apply opacity to body (original method)
  document.getElementsByTagName("BODY")[0].style.opacity = opacity;
};

Paywall.prototype.removeOverlay = function() {
  if (this.overlay && this.overlay.parentNode) {
    this.overlay.parentNode.removeChild(this.overlay);
    this.overlay = null;
  }
};

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Paywall;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return Paywall; });
} else if (typeof window !== 'undefined') {
  window.Paywall = Paywall;
} 
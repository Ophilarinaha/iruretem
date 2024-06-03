class Phone {
  private phoneNumber: string;
  private extension: string;

  constructor(phoneInput: string) {
    const phoneParts = phoneInput.split(' x');
    this.phoneNumber = phoneParts[0];
    this.extension = phoneParts.length > 1 ? phoneParts[1] : '';
  }

  formatNumber(): string {
    // Formats the phone number to a standard format
    const cleaned = ('' + this.phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return this.phoneNumber;
  }

  getExtension(): string {
    // Returns the extension number
    return this.extension;
  }
}

// Usage
const phone = new Phone("1-770-736-8031 x56442");
console.log(phone.formatNumber()); // Output: (770) 736-8031
console.log(phone.getExtension()); // Output: 56442

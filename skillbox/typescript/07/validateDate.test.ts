import { validateDate } from '../validateDate';

describe('validateDate', () => {
 it('should return true and message "Date is valid." for valid date format DD.MM.YYYY', () => {
   const date = new Date();
   const dateToTest = `${date.getDate()}.${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`;
   const result = validateDate(dateToTest);
   expect(result.isValid).toBe(true);
   expect(result.message).toBe('Date is valid.');
 });

 it('should return false and message "Date contains invalid characters." if date contains special characters', () => {
   const result = validateDate('25.08.20@4');
   expect(result.isValid).toBe(false);
   expect(result.message).toBe('Date contains invalid characters.');
 });

 it('should return false and message "Date contains invalid characters." if date contains letters', () => {
   const result = validateDate('25.08.20aa');
   expect(result.isValid).toBe(false);
   expect(result.message).toBe('Date contains invalid characters.');
 });

 it('should return false and message "Date cannot be in the past." if date is in the past', () => {
   const result = validateDate('25.08.2020');
   expect(result.isValid).toBe(false);
   expect(result.message).toBe('Date cannot be in the past.');
 });

 it('should return false and message "Date is invalid." for an invalid date like 31.02.2024', () => {
   const result = validateDate('31.02.2024');
   expect(result.isValid).toBe(false);
   expect(result.message).toBe('Date is invalid.');
 });

 it('should return false and message "Date is required." if date is empty or not a string', () => {
   const resultEmpty = validateDate('');
   expect(resultEmpty.isValid).toBe(false);
   expect(resultEmpty.message).toBe('Date is required.');

   const resultNotString = validateDate(null as unknown as string);
   expect(resultNotString.isValid).toBe(false);
   expect(resultNotString.message).toBe('Date is required.');
 });

 it('should return false and message "Date must be in the format DD.MM.YYYY." if date format is incorrect', () => {
   const result = validateDate('12-08-2024');
   expect(result.isValid).toBe(false);
   expect(result.message).toBe('Date must be in the format DD.MM.YYYY.');
 });
});

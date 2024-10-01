import { validateCityName } from './../validateCity';
describe('validateCityName', () => {
 it('should return false and a message "City name contains characters that need to be escaped." if the city name contains characters that need escaping', () => {
   const result = validateCityName('<New York>');
   expect(result.isValid).toBe(false);
   expect(result.message).toBe('City name contains characters that need to be escaped.');
 });

 it('should return true and message "City name is valid." for city names with exclamation marks or hyphens', () => {
   const result = validateCityName('Saint-Louis-du-Ha! Ha!');
   expect(result.isValid).toBe(true);
   expect(result.message).toBe('City name is valid.');
 });

 it('should return true and message "City name is valid." for city names with special characters', () => {
   const result = validateCityName('Ağrı');
   expect(result.isValid).toBe(true);
   expect(result.message).toBe('City name is valid.');
 });

 it('should return true and message "City name is valid." for city names with a single letter', () => {
   const result = validateCityName('A');
   expect(result.isValid).toBe(true);
   expect(result.message).toBe('City name is valid.');
 });

 it('should return false and message "City name is required." if the city name is empty', () => {
   const result = validateCityName('');
   expect(result.isValid).toBe(false);
   expect(result.message).toBe('City name is required.');
 });

 it('should return true and message "City name is valid." for valid city names', () => {
   const result = validateCityName('New York');
   expect(result.isValid).toBe(true);
   expect(result.message).toBe('City name is valid.');
 });

 it('should return false and message "City name contains invalid characters." if the city name contains invalid characters', () => {
   const result = validateCityName("St. John's");
   expect(result.isValid).toBe(false);
   expect(result.message).toBe('City name contains invalid characters.');
 });

 it('should return true and message "City name is valid." for a city name with accented characters', () => {
   const result = validateCityName('São Paulo');
   expect(result.isValid).toBe(true);
   expect(result.message).toBe('City name is valid.');
 });

 it('should return false and message "City name contains invalid characters." if the city name contains non-letter characters', () => {
   const result = validateCityName('San José');
   expect(result.isValid).toBe(true);
   expect(result.message).toBe('City name is valid.');
 });
});

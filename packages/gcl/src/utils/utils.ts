
interface TemplateResult {
  /**
   * The text resulting from replacing the placeholders that match the name of the data members
   * with the value of those data members
   */
  text: string

  /**
   * The array with the name of the data members whose names did not match the ones in the placeholders 
   */
  keysNotInData?: string[]
}

/**
 * Replaces any placeholders "{{memberName}}" with the value of the data member that matches that name
 * @param text 
 * @param data 
 */
export function template(text: string, data: any): TemplateResult {

  const result = {
    text,
    keysNotInData: [] // Keys not found in the data
  };

  if (!data) {

    return result; // Nothing to replace in the template, return the original text
  }

  let matchFound = false;

  function processMatch(match/*, offset, string*/) {

    matchFound = true;
    
    match = match.replace('{{', '').replace('}}', '').trim(); // Remove the {{ }} around the match

    if (!data.hasOwnProperty(match)) { // Key was not found in data

      result.keysNotInData.push(match);
    }
    else {

      return data[match];
    }
  }

  result.text = text.replace(/\{{\S+?\}}/g, processMatch);

  if (!matchFound) {

    result.keysNotInData = Object.keys(data); // None of the keys were found
  }

  return result;
}

namespace radio {
    const DELIMITER = "~~";
    /**
     * Send an array as a serialized string message over the radio.
     * @param array The array to be sent
     */
    //% blockId=SendArray block="send array %array"
    //% array.shadow="lists_create_with"
    //% help=googie/sendArray
    //% group="send"
    export function sendArray(array: string[]): void {
        let serializedArray = array.join(DELIMITER);
        radio.sendString(serializedArray);
    }

    /**
     * Registers an event handler for receiving an array.
     * @param handler The handler to run when an array is received
     */
    //% blockId=OnReceivedArray block="on received array"
    //% help=googie/onReceivedArray
    //% group="receive"
    export function onReceivedArray(handler: (array: string[]) => void): void {
        radio.onReceivedString(function (receivedString: string) {
            let receivedArray = receivedString.split(DELIMITER);
            handler(receivedArray);
        });
    }
}

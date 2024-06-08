namespace radio {
    const DELIMITER = "~~";
    /**
     * Send an array as a serialized string message over the radio.
     * @param array The array to be sent
     */
    //% blockId=SendArray block="send array %array"
    //% array.shadow="lists_create_with"
    //% help=googie/sendArray
    //% group="Send"
    export function sendArray(array: string[]): void {
        let sa = array.join(DELIMITER);
        radio.sendString(sa);
    }

    /**
     * Registers an event handler for receiving an array.
     * @param handler The handler to run when an array is received
     */
    //% blockId=OnReceivedArray block="on received"
    //% help=googie/onReceivedArray
    //% group="Receive"
    export function onReceivedArray(handler: (list: string[]) => void): void {
        radio.onReceivedString(function (r: string) {
            let ra = r.split(DELIMITER);
            handler(ra);
        });
    }
}

//% weight=0 color=#3CB371 icon="\uf2b9" block="SelfBlock"

namespace selfblock {
    /* 有傳回值旳拼塊 */
    //% blockId="addTwoNum" block="calculate total of num1 %num1|num2 %num2"
    //% blockGap=2 weight=90 blockExternalInputs=true
    export function addTwoNum(num1: number, num2:number): number {
        return num1+num2
    }

    /* 無傳回值旳拼塊 */
    //% blockId="showStringWithTime" block="show string %str|with delay time %delay"
    //% blockGap=2 weight=80
    export function showStringWithTime(str: string, delay:number): void {
        basic.showString(str,delay)
    }
}

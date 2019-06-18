//% weight=0 color=#3CB371 icon="\uf2b9" block="SensorBlock"



namespace selfblock {

    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x00 command 0x80 return byte */

    //% blockId="G54enable" block="G54 Enable"

    //% blockGap=2 weight=89
    
    export function G54enable() {

	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)

	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)

	basic.pause(200)

	pins.i2cWriteNumber(41,128,NumberFormat.UInt8LE,false)

	basic.pause(200)

	pins.i2cWriteNumber(41,3,NumberFormat.UInt8LE,false)

    }


    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x12 command 0x92 return byte */
    
    //% blockId="G54getIDno" block="G54 get IDno"
    
    //% blockGap=2 weight=88

    export function G54getIDno(): number {

	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)

	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)

	basic.pause(200)

	pins.i2cWriteNumber(41,146,NumberFormat.UInt8LE,false)

	basic.pause(200)

	let IDno = pins.i2cReadNumber(41, NumberFormat.UInt8LE, false)

        return IDno

    }



    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x13 command 0x93 return byte */

    //% blockId="G54getStatus" block="G54 get Status"

    //% blockGap=2 weight=87

    export function G54getStatus(): number {

	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)

	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)

	basic.pause(200)

	pins.i2cWriteNumber(41,147,NumberFormat.UInt8LE,false)

	basic.pause(200)

	let Status = pins.i2cReadNumber(41, NumberFormat.UInt8LE, false)

        return Status

    }



    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x14-15 command 0x94-95 return byte */

    //% blockId="G54getClear" block="G54 get Clear data"

    //% blockGap=2 weight=86

    export function G54getClear(): number {

	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)

	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)

	basic.pause(200)

	pins.i2cWriteNumber(41,180,NumberFormat.UInt8LE,false)

	basic.pause(200)

	let Clrdata = pins.i2cReadNumber(41, NumberFormat.UInt16LE, false)

        return Clrdata

    }



    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x16-17 command 0x96-97 return byte */

    //% blockId="G54getRed" block="G54 get Red data"

    //% blockGap=2 weight=85

    export function G54getRed(): number {

	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)

	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)

	basic.pause(200)

	pins.i2cWriteNumber(41,182,NumberFormat.UInt8LE,false)

	basic.pause(200)

	let Red = pins.i2cReadNumber(41, NumberFormat.UInt16LE, false)

        return Red

    }



    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x18-19 command 0x98-99 return byte */

    //% blockId="G54getGreen" block="G54 get Green data"

    //% blockGap=2 weight=84

    export function G54getGreen(): number {

	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)

	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)

	basic.pause(200)

	pins.i2cWriteNumber(41,184,NumberFormat.UInt8LE,false)

	basic.pause(200)

	let Green = pins.i2cReadNumber(41, NumberFormat.UInt16LE, false)

        return Green

    }



    /* G54 TCS34725 RGBC color sensor addr 0x29 register 0x1A-1B command 0x9A-9B return byte */

    //% blockId="G54getBlue" block="G54 get Blue data"

    //% blockGap=2 weight=83

    export function G54getBlue(): number {

	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)

	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)

	basic.pause(200)

	pins.i2cWriteNumber(41,186,NumberFormat.UInt8LE,false)

	basic.pause(200)

	let Blue = pins.i2cReadNumber(41, NumberFormat.UInt16LE, false)

        return Blue
 
   }

    /* CJMCU-8118 HDC1080 Temp&Humidity sensor addr 0x40 register 0xFF command 0xFF return 0x1050 */

    //% blockId="CJMCU8118THIDno" block="CJMCU8118 TH IDno"

    //% blockGap=2 weight=79
    
    export function CJMCU8118THIDno(): number {

	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)

	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)

	basic.pause(200)

	pins.i2cWriteNumber(64,255,NumberFormat.UInt8LE,false)

	basic.pause(200)

	return pins.i2cReadNumber(64, NumberFormat.UInt16BE, false)

    }

    /* CJMCU-8118 HDC1080 Temp&Humidity sensor addr 0x40 register 0x02 command 0x02 return 2 bytes */

    //% blockId="CJMCU8118THConfig" block="CJMCU8118 TH Config"

    //% blockGap=2 weight=78
    
    export function CJMCU8118THConfig(): number {

	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)

	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)

	basic.pause(200)

	pins.i2cWriteNumber(64,2,NumberFormat.UInt8LE,false)

	basic.pause(200)

	return pins.i2cReadNumber(64, NumberFormat.UInt16BE, false)

    }


}



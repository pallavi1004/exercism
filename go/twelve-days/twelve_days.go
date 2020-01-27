package twelve

import "fmt"

var ordinals = []string{"", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"}
var gifts = []string{
	"",
	"a Partridge in a Pear Tree",
	"two Turtle Doves",
	"three French Hens",
	"four Calling Birds",
	"five Gold Rings",
	"six Geese-a-Laying",
	"seven Swans-a-Swimming",
	"eight Maids-a-Milking",
	"nine Ladies Dancing",
	"ten Lords-a-Leaping",
	"eleven Pipers Piping",
	"twelve Drummers Drumming",
}

func Song() string {
	ret := ""
	for i := 1; i <= 12; i++ {
		ret += Verse(i)
		if i != 12 {
			ret += "\n"
		}
	}
	return ret
}

func Verse(i int) string {
	ret := fmt.Sprintf("On the %s day of Christmas my true love gave to me: ", ordinals[i])
	return ret + giftsVerse(i)
}

func giftsVerse(i int) string {
	ret := ""
	for ; i >= 1; i-- {
		ret += gifts[i]
		if i == 1 {
			ret += "."
		} else if i == 2 {
			ret += ", and "
		} else {
			ret += ", "
		}
	}
	return ret
}
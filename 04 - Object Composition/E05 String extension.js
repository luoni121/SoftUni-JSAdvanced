(() => {
    String.prototype.ensureStart = function (str) {
        const currentStr = this.valueOf();

        if (currentStr.indexOf(str) === 0) {
            return currentStr;
        }
        return str + currentStr;
    }

    String.prototype.ensureEnd = function (str) {
        const currentStr = this.valueOf();

        if (currentStr.endsWith(str)) {
            return currentStr;
        }
        return currentStr + str;
    }

    String.prototype.isEmpty = function () {
        return this.valueOf() === "";
    };

    String.prototype.truncate = function (n) {
        const currentStr = this.valueOf();

        if (n < 4) {
            return ".".repeat(n);
        }

        if (currentStr.length <= n) {
            return currentStr;
        }

        let lastIndex = currentStr.substr(0, n - 2).lastIndexOf(" ");
        if (lastIndex != -1) {
            return currentStr.substr(0, lastIndex) + "...";
        } else {
            return currentStr.substr(0, n - 3) + "...";
        }
    };

    String.format = function (str,...params) {

        for (let i = 0; i < params.length; i++) {
            let currentPlaceHolder = str.indexOf("{" + i + "}");

            //use while -> can have one placeholder more than once
            while (currentPlaceHolder != -1) {
                str = str.replace("{" + i + "}", params[i]);
                currentPlaceHolder = str.indexOf("{" + i + "}");
            }
        }
        return str;
    }
})();

// let str = 'my string';
// str = str.ensureStart('my');
// str = str.ensureStart('hello ');
// str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// str = String.format('The {0} {1} fox', 'quick', 'brown');
// str = String.format('jumps {0} {1}', 'dog');

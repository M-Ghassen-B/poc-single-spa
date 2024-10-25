const helloController = function () {
	this.yourName = 'world';
	
	this.getAppVersion = () => {
		return "0.0.1";
	};
};

export default helloController;

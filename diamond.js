
const space = function(n) {		
				for(let i=1, x=' '; i<=n; i++) {
					x+=' ';
					if(i===0) {
					return '';
					}
					if(i===n) {
					return x;
					}
				}
			};
			

			const stars = function(n) {
				for(let i=1, x=''; i<=n; i++) {
					x+='*'
					if(i===n) {
					return x;
					}
				}
			};
			

			

			const diamond = function(n) {
				if(n%2==0) {
					n=n+1;
				}
			

				for(let i=0; i<(n+1)/2; i++){
					console.log(space((n+1)/2 - i) + stars(2*i+1));
				}
			

				for(let i=(n-1)/2; i>0; i-=1) {
					console.log(space((n-1)/2-i+2) + stars(2*i-1));
				}
			};
			

			diamond(7);
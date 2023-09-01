setup:
	echo "#!/bin/bash\n\nnpm run lint" > .git/hooks/pre-commit
	chmod +x .git/hooks/pre-commit